import { vec3_polygonNormal, vec3_dot, type Plane } from "../math/vectors";
import { polygon_clone, type Polygon } from "./geometry";
import { vertex_lerp, type Vertex } from "./vertex";

export const PLANE_EPSILON = 0.00008;

export type CSGInput = CSGNode | readonly Polygon[];

export interface CSGPolygon extends Polygon {
  $flipped: boolean;

  /**
   * When a polygon is splitted, this will contain the polygon from which this polygon was splitted.
   * This is then used by csg_polygons to merge back splitted polygons if they are both present,
   * to reduce the number of vertices and triangles.
   */
  $parent: CSGPolygon | null;
}

interface SplitPolygonResult {
  $front: CSGPolygon | undefined | false;
  $back: CSGPolygon | undefined | false;
}

const CSGPolygon_splitSpanning = (plane: Plane, polygon: CSGPolygon): SplitPolygonResult => {
  const { $points } = polygon;
  const fpoints: Vertex[] = [];
  const bpoints: Vertex[] = [];
  let iv: Vertex = $points[$points.length - 1]!;
  let d: number = vec3_dot(plane, iv) - plane.w;
  let v: Vertex;
  let jd: number;
  let jv: Vertex;
  for (let i = 0; i < $points.length; ++i) {
    jv = $points[i]!;
    jd = vec3_dot(plane, jv) - plane.w;
    if (d > -PLANE_EPSILON) {
      fpoints.push(iv);
    }
    if (d < PLANE_EPSILON) {
      bpoints.push(iv);
    }
    if ((d < -PLANE_EPSILON && jd > PLANE_EPSILON) || (d > PLANE_EPSILON && jd < -PLANE_EPSILON)) {
      v = vertex_lerp(iv, jv, -d / (plane.x * (jv.x - iv.x) + plane.y * (jv.y - iv.y) + plane.z * (jv.z - iv.z)));
      fpoints.push(v);
      bpoints.push(v);
    }
    iv = jv;
    d = jd;
  }
  return {
    $front: fpoints.length > 2 && {
      $color: polygon.$color,
      $points: fpoints,
      $flipped: polygon.$flipped,
      $parent: polygon,
    },
    $back: bpoints.length > 2 && {
      $color: polygon.$color,
      $points: bpoints,
      $flipped: polygon.$flipped,
      $parent: polygon,
    },
  };
};

const CSGPolygon_split = (plane: Plane, polygon: CSGPolygon): SplitPolygonResult => {
  const { $points } = polygon;
  let f: CSGPolygon | undefined | false;
  let b: CSGPolygon | undefined | false;
  let t: number;
  for (let i = 0; i < $points.length && (!f || !b); ++i) {
    t = vec3_dot(plane, $points[i]!) - plane.w;
    if (t < -PLANE_EPSILON) {
      b = polygon;
    } else if (t > PLANE_EPSILON) {
      f = polygon;
    }
  }
  return f && b ? CSGPolygon_splitSpanning(plane, polygon) : { $front: f, $back: b };
};

export interface CSGNode extends Plane {
  /** Coplanar polygons */
  $polygons: CSGPolygon[];
  /** Front child */
  $front: CSGNode | null;
  /** Back child */
  $back: CSGNode | null;
}

export const csg_tree_addPolygon = (
  node: CSGNode | null | undefined,
  polygon: CSGPolygon,
  polygonPlane: Plane,
): CSGNode => {
  if (!node) {
    return {
      x: polygonPlane.x,
      y: polygonPlane.y,
      z: polygonPlane.z,
      w: polygonPlane.w,
      $polygons: [polygon],
      $front: null,
      $back: null,
    };
  }
  const { $front, $back } = CSGPolygon_split(node, polygon);
  if ($front) {
    node.$front = csg_tree_addPolygon(node.$front, $front, polygonPlane);
  }
  if ($back) {
    node.$back = csg_tree_addPolygon(node.$back, $back, polygonPlane);
  }
  if (!$front && !$back) {
    // Coplanar
    node.$polygons.push(polygon);
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
    for (const { $color, $points } of n as Polygon[]) {
      const plane = vec3_polygonNormal($points as [Vertex, Vertex, Vertex]) as Plane;
      plane.w = vec3_dot(plane, $points[0]!);
      root = csg_tree_addPolygon(root, { $color, $points, $flipped: false, $parent: null }, plane);
    }
    return root!;
  }
  return n as CSGNode;
};

export const csg_tree_each = (node: CSGNode | null, fn: (node: CSGNode) => void) => {
  if (node) {
    fn(node);
    csg_tree_each(node.$front, fn);
    csg_tree_each(node.$back, fn);
  }
};

/** Convert solid space to empty space and empty space to solid space. */
export const csg_tree_flip = (root: CSGNode | null): void =>
  csg_tree_each(root, (node) => {
    const back = node.$back;
    for (const polygon of node.$polygons) {
      polygon.$flipped = !polygon.$flipped;
    }
    node.x *= -1;
    node.y *= -1;
    node.z *= -1;
    node.w *= -1;
    node.$back = node.$front;
    node.$front = back;
  });

const csg_tree_clipPolygon = (node: CSGNode, polygon: CSGPolygon, polygonPlane: Plane, result: CSGPolygon[]): void => {
  let { $front, $back } = CSGPolygon_split(node, polygon);
  if (!$front && !$back) {
    // Coplanar
    if (vec3_dot(node, polygonPlane) > node.w) {
      $front = polygon;
    } else {
      $back = polygon;
    }
  }
  if ($front) {
    // Front
    if (node.$front) {
      csg_tree_clipPolygon(node.$front, $front, polygonPlane, result);
    } else {
      result.push($front);
    }
  }
  if ($back && node.$back) {
    // Back
    csg_tree_clipPolygon(node.$back, $back, polygonPlane, result);
  }
};

export const csg_tree_clipTo = (root: CSGNode | null, bsp: CSGNode): void => {
  csg_tree_each(root, (node) => {
    const clipped: CSGPolygon[] = [];
    for (const polygon of node.$polygons) {
      csg_tree_clipPolygon(bsp, polygon, node, clipped);
    }
    node.$polygons = clipped;
  });
};

export const csg_tree_addTree = (tree: CSGNode | null, source: CSGNode | null): void =>
  csg_tree_each(source, (sourceNode) => {
    for (const polygon of sourceNode.$polygons) {
      csg_tree_addPolygon(tree, polygon, sourceNode);
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

export const csg_polygons = (tree: CSGNode): Polygon[] => {
  const byParent = new Map<CSGPolygon, CSGPolygon>();
  const allPolygons = new Map<CSGPolygon, boolean>();

  /** Adds a polygon, and replaces two splitted polygons that have the same parent with the parent */
  const add = (polygon: CSGPolygon): CSGPolygon => {
    const parent = polygon.$parent;
    let found: CSGPolygon | undefined;
    if (parent) {
      found = byParent.get(parent);
      if (found) {
        allPolygons.delete(found);
        polygon = add(parent);
      } else {
        byParent.set(parent, polygon);
      }
    }
    return polygon;
  };

  csg_tree_each(tree, (node) => {
    for (const polygon of node.$polygons) {
      allPolygons.set(add(polygon), polygon.$flipped);
    }
  });

  return Array.from(allPolygons, (kv) => polygon_clone(kv[0], kv[1]));
};
