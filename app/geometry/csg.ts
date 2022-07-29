import type { Vec3In } from "../math/vectors";
import { vec3_polygonNormal, vec3_dot, type Plane } from "../math/vectors";
import { type Polygon } from "./geometry";

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
  const fpoints: Vec3In[] = [];
  const bpoints: Vec3In[] = [];
  let t: number;
  let jd: number;
  let iv: Vec3In = $points[$points.length - 1]!;
  let id: number = vec3_dot(plane, iv) - plane.w;
  for (const jv of $points) {
    if (id > -PLANE_EPSILON) {
      fpoints.push(iv);
    }
    if (id < PLANE_EPSILON) {
      bpoints.push(iv);
    }
    jd = vec3_dot(plane, jv) - plane.w;
    if ((id < -PLANE_EPSILON && jd > PLANE_EPSILON) || (id > PLANE_EPSILON && jd < -PLANE_EPSILON)) {
      t = id / (jd - id);
      iv = {
        x: iv.x + (iv.x - jv.x) * t,
        y: iv.y + (iv.y - jv.y) * t,
        z: iv.z + (iv.z - jv.z) * t,
      };
      fpoints.push(iv);
      bpoints.push(iv);
    }
    iv = jv;
    id = jd;
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
  let $front: CSGPolygon | undefined | false;
  let $back: CSGPolygon | undefined | false;
  let d: number;
  for (const p of polygon.$points) {
    d = vec3_dot(plane, p) - plane.w;
    if (d < -PLANE_EPSILON) {
      $back = polygon;
    } else if (d > PLANE_EPSILON) {
      $front = polygon;
    }
    if ($back && $front) {
      return CSGPolygon_splitSpanning(plane, polygon);
    }
  }
  return { $front, $back };
};

export interface CSGNode extends Plane {
  /** Coplanar polygons */
  $polygons: CSGPolygon[];
  /** Front child */
  $front: CSGNode | null;
  /** Back child */
  $back: CSGNode | null;
}

const csg_tree_addPolygon = (
  node: CSGNode | null | undefined,
  polygon: CSGPolygon,
  polygonNormal: Vec3In,
  planeW: number,
): CSGNode => {
  if (node) {
    const { $front, $back } = CSGPolygon_split(node, polygon);
    if (!$front && !$back) {
      node.$polygons.push(polygon); // Coplanar
    }
    if ($front) {
      node.$front = csg_tree_addPolygon(node.$front, $front, polygonNormal, planeW);
    }
    if ($back) {
      node.$back = csg_tree_addPolygon(node.$back, $back, polygonNormal, planeW);
    }
  } else {
    node = {
      x: polygonNormal.x,
      y: polygonNormal.y,
      z: polygonNormal.z,
      w: planeW,
      $polygons: [polygon],
      $front: null,
      $back: null,
    };
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
      const normal = vec3_polygonNormal($points as [Vec3In, Vec3In, Vec3In]) as Plane;
      root = csg_tree_addPolygon(
        root,
        { $color, $points, $flipped: false, $parent: null },
        normal,
        vec3_dot(normal, $points[0]!),
      );
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
      csg_tree_addPolygon(tree, polygon, sourceNode, sourceNode.w);
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
  const result: Polygon[] = [];
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

  for (const [p, flipped] of allPolygons) {
    const $points = p.$points.map(({ x, y, z }) => ({ x, y, z }));
    result.push({ $color: p.$color, $points: flipped ? $points.reverse() : $points });
  }
  return result;
};
