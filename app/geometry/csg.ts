import { vec3_dot, plane_fromPolygon, vec3_plane_distance, type Vec3In, type Plane } from "../math/vectors";
import { type Polygon } from "./geometry";

export const PLANE_EPSILON = 0.00008;

export interface CSGPolygon extends Polygon {
  $flipped: boolean;

  /**
   * When a polygon is splitted, this will contain the polygon from which this polygon was splitted.
   * This is then used by csg_polygons to merge back splitted polygons if they are both present,
   * to reduce the number of vertices and triangles.
   */
  $parent: CSGPolygon | null;
}

export interface CSGNode extends Plane {
  /** Coplanar polygons */
  $polygons: CSGPolygon[];
  /** Front child */
  $front: CSGNode | null;
  /** Back child */
  $back: CSGNode | null;
}

export type CSGInput = CSGNode | readonly Polygon[];

interface SplitPolygonResult {
  $front: CSGPolygon | undefined | false;
  $back: CSGPolygon | undefined | false;
}

const CSGPolygon_splitSpanning = (plane: Plane, polygon: CSGPolygon): SplitPolygonResult => {
  const $points = polygon.$points;
  let iv: Vec3In = $points.at(-1)!;
  let id: number = vec3_plane_distance(plane, iv);
  let jd: number;
  let t: number;
  const fpoints: Vec3In[] = [];
  const bpoints: Vec3In[] = [];
  for (const jv of $points) {
    jd = vec3_plane_distance(plane, jv);
    if (id < PLANE_EPSILON) {
      bpoints.push(iv);
    }
    if (id > -PLANE_EPSILON) {
      fpoints.push(iv);
    }
    if ((id > PLANE_EPSILON && jd < -PLANE_EPSILON) || (id < -PLANE_EPSILON && jd > PLANE_EPSILON)) {
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
  let $front: CSGPolygon | undefined;
  let $back: CSGPolygon | undefined;
  let d: number;
  for (const point of polygon.$points) {
    d = vec3_plane_distance(plane, point);
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

const csg_tree_addPolygon = (node: CSGNode | null | undefined, polygon: CSGPolygon, plane: Plane): CSGNode => {
  if (!node) {
    return {
      x: plane.x,
      y: plane.y,
      z: plane.z,
      w: plane.w,
      $polygons: [polygon],
      $front: null,
      $back: null,
    };
  }
  const { $front, $back } = CSGPolygon_split(node, polygon);
  if (!$front && !$back) {
    node.$polygons.push(polygon); // Coplanar
  }
  if ($front) {
    node.$front = csg_tree_addPolygon(node.$front, $front, plane);
  }
  if ($back) {
    node.$back = csg_tree_addPolygon(node.$back, $back, plane);
  }
  return node;
};

const csg_tree_clipPolygon = (
  node: CSGNode,
  polygon: CSGPolygon,
  polygonPlane: Plane,
  polygonPlaneFlipped: -1 | 1,
  result: CSGPolygon[],
): void => {
  let { $front, $back } = CSGPolygon_split(node, polygon);
  if (!$front && !$back) {
    // Coplanar
    if (vec3_dot(node, polygonPlane) * polygonPlaneFlipped > 0) {
      $front = polygon;
    } else {
      $back = polygon;
    }
  }
  if ($front) {
    // Front
    if (node.$front) {
      csg_tree_clipPolygon(node.$front, $front, polygonPlane, polygonPlaneFlipped, result);
    } else {
      result.push($front);
    }
  }
  if ($back && node.$back) {
    // Back
    csg_tree_clipPolygon(node.$back, $back, polygonPlane, polygonPlaneFlipped, result);
  }
};

/**
 * If the given argument is a list of polygons, a new BSP tree built from the list of polygons is returned.
 * If the given argument is already a BSP tree, return it as is.
 * Note that array cannot be empty.
 */
export const csg_tree = (n: CSGInput): CSGNode => {
  let root: CSGNode | undefined;
  if (!(n as Polygon[]).length) {
    return n as CSGNode;
  }
  // Build a BSP tree from a list of polygons
  for (const { $color, $points } of n as Polygon[]) {
    root = csg_tree_addPolygon(root, { $color, $points, $flipped: false, $parent: null }, plane_fromPolygon($points));
  }
  return root!;
};

/** Loop through all nodes in a tree */
export const csg_tree_each = (node: CSGNode | null, fn: (node: CSGNode) => void) => {
  if (node) {
    fn(node);
    csg_tree_each(node.$front, fn);
    csg_tree_each(node.$back, fn);
  }
};

export const csg_union_op = (a: CSGInput, b: CSGInput | undefined): CSGNode => {
  const polygonsToAdd: [Plane, CSGPolygon[]][] = [];
  a = csg_tree(a);
  if (b) {
    b = csg_tree(b);

    // clip to a, b
    csg_tree_each(a, (node) => {
      const clipped: CSGPolygon[] = [];
      for (const polygon of node.$polygons) {
        csg_tree_clipPolygon(b as CSGNode, polygon, node, 1, clipped);
      }
      node.$polygons = clipped;
    });

    // get the list of polygons to be added from b clipped to a
    csg_tree_each(b, (node) => {
      const clipped: CSGPolygon[] = [];
      for (const polygon of node.$polygons) {
        csg_tree_clipPolygon(a as CSGNode, polygon, node, -1, clipped);
      }
      polygonsToAdd.push([node, clipped]);
    });

    for (const [plane, polygons] of polygonsToAdd) {
      for (const pp of polygons) {
        csg_tree_addPolygon(a, pp, plane);
      }
    }
  }
  return a;
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

export const csg_subtract = (a: CSGInput, b: CSGInput): CSGNode => {
  a = csg_tree(a);
  csg_tree_flip(a);
  csg_union_op(a, b);
  csg_tree_flip(a);
  return a;
};

export const csg_union = (inputs: CSGInput[]): CSGNode => inputs.reduce(csg_union_op) as CSGNode;

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

  for (let [{ $color, $points }, flipped] of allPolygons) {
    $points = $points.map(({ x, y, z }) => ({ x, y, z }));
    if (flipped) {
      $points.reverse();
    }
    result.push({ $color, $points });
  }
  return result;
};
