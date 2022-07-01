import { vec3_dot, vec3_triangleNormal, type Plane } from "../math/vectors";
import { polygon_clone, polygon_flipped, type Polygon } from "./geometry";
import { vertex_lerp, type Vertex } from "./vertex";

export const PLANE_EPSILON = 1e-5;

export type CSGInput = CSGNode | readonly Polygon[];

export interface CSGPolygon extends Polygon {
  $flipped: -1 | 1;
}

interface SplitPolygonResult {
  f?: CSGPolygon | undefined | false;
  b?: CSGPolygon | undefined | false;
}

const CSGPolygon_split = (plane: Plane, polygon: CSGPolygon): SplitPolygonResult => {
  const { $points, $material, $flipped } = polygon;
  let f: CSGPolygon | undefined | false;
  let b: CSGPolygon | undefined | false;

  const w = plane.w;
  for (let i = 0, len = $points.length; i < len && (!f || !b); ) {
    const t = vec3_dot(plane, $points[i++]!) - w;
    if (t < -PLANE_EPSILON) {
      b = polygon;
    } else if (t > PLANE_EPSILON) {
      f = polygon;
    }
  }
  if (b && f) {
    // SPANNING
    const fpoints: Vertex[] = [];
    const bpoints: Vertex[] = [];
    let iv: Vertex = $points[$points.length - 1]!;
    let id: number = vec3_dot(plane, iv) - w;
    let v: Vertex;
    for (const jv of $points) {
      const jd = vec3_dot(plane, jv) - w;
      if (id > -PLANE_EPSILON) {
        fpoints.push(iv);
      }
      if (id < PLANE_EPSILON) {
        bpoints.push(iv);
      }
      if ((id < -PLANE_EPSILON && jd > PLANE_EPSILON) || (id > PLANE_EPSILON && jd < -PLANE_EPSILON)) {
        v = vertex_lerp(iv, jv, -id / (plane.x * (jv.x - iv.x) + plane.y * (jv.y - iv.y) + plane.z * (jv.z - iv.z)));
        fpoints.push(v);
        bpoints.push(v);
      }
      iv = jv;
      id = jd;
    }
    f = fpoints.length > 2 && { $material, $points: fpoints, $flipped };
    b = bpoints.length > 2 && { $material, $points: bpoints, $flipped };
  }
  return { f, b };
};

export interface CSGNode extends Plane {
  /** Coplanar polygons */
  p: CSGPolygon[];
  /** Front child */
  f: CSGNode | null;
  /** Back child */
  b: CSGNode | null;
}

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
  if (f) {
    // Front
    node.f = csg_tree_addPolygon(node.f, f);
  }
  if (b) {
    // Back
    node.b = csg_tree_addPolygon(node.b, b);
  }
  if (!f && !b) {
    // Coplanar
    node.p.push(polygon);
  }
  return node;
};

/**
 * If the given argument is a list of polygons, a new BSP tree built from the list of polygons is returned.
 * If the given argument is already a BSP tree, return it as is.
 */
export const csg_tree = (n: CSGInput): CSGNode => {
  if (Array.isArray(n)) {
    // Build a BSP tree from a list of polygons
    let root: CSGNode | undefined;
    for (const { $material, $points } of n as Polygon[]) {
      root = csg_tree_addPolygon(root, { $material, $points, $flipped: 1 });
    }
    return root!;
  }
  return n as CSGNode;
};

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
    node.x *= -1;
    node.y *= -1;
    node.z *= -1;
    node.w *= -1;
    node.b = f;
    node.f = b;
    for (const polygon of node.p) {
      polygon.$flipped = -polygon.$flipped as -1 | 1;
    }
  });

const csg_tree_clipPolygon = (node: CSGNode, polygon: CSGPolygon, result: CSGPolygon[]) => {
  let { f, b } = CSGPolygon_split(node, polygon);
  if (!f && !b) {
    // Coplanar
    if (vec3_dot(node, vec3_triangleNormal(polygon.$points as [Vertex, Vertex, Vertex])) * polygon.$flipped > node.w) {
      f = polygon;
    } else {
      b = polygon;
    }
  }
  if (f) {
    // Front
    if (node.f) {
      csg_tree_clipPolygon(node.f, f, result);
    } else {
      result.push(f);
    }
  }
  if (b && node.b) {
    // Back
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

export const csg_union_op = (a: CSGInput, b: CSGInput | undefined): CSGNode => {
  a = csg_tree(a);
  if (b) {
    b = csg_tree(b);
    csg_tree_clipTo(a, b);
    csg_tree_clipTo(b, a);
    csg_tree_flip(b);
    csg_tree_clipTo(b, a);
    csg_tree_flip(b);
    csg_tree_addTree(a, b);
  }
  return a;
};

export const csg_union = (inputs: CSGInput[]): CSGNode => inputs.reduce(csg_union_op) as CSGNode;

export const csg_subtract = (a: CSGInput, b: CSGInput): CSGNode => {
  a = csg_tree(a);
  csg_tree_flip(a);
  csg_union_op(a, b);
  csg_tree_flip(a);
  return a;
};

export const csg_intersect = (a: CSGInput, b: CSGInput): CSGNode => {
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
  csg_tree_each(tree, (node) => {
    for (const polygon of node.p) {
      result.push(polygon.$flipped < 0 ? polygon_flipped(polygon) : polygon_clone(polygon));
    }
  });
  return result;
};
