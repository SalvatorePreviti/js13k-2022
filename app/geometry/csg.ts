import { polygon_color, type Polygon } from "./polygon";
import { vec3_dot, plane_fromPolygon, type Plane, type Vec3, type Vec3In } from "../math/vectors";

export interface CSGPolygon {
  $polygon: Polygon;

  $flipped: 0 | boolean;

  /**
   * When a polygon is splitted, this will contain the polygon from which this polygon was splitted.
   * This is then used by csg_polygons to merge back splitted polygons if they are both present,
   * to reduce the number of vertices and triangles.
   */
  $parent: CSGPolygon | 0;
}

export interface CSGNode extends Plane {
  /** Coplanar polygons */
  $polygon: CSGPolygon[];
  /** Front child */
  $front: CSGNode | 0;
  /** Back child */
  $back: CSGNode | 0;
}

export type CSGInput = CSGNode | readonly Polygon[];

interface SplitPolygonResult {
  // Front
  x: CSGPolygon | undefined | false;
  // Back
  y: CSGPolygon | undefined | false;
}

const CSGPolygon_split = (plane: Plane, polygon: CSGPolygon): SplitPolygonResult => {
  const PLANE_EPSILON = 0.00008;

  let jd: number;
  let front: CSGPolygon | false | undefined;
  let back: CSGPolygon | false | undefined;
  const { $polygon, $flipped } = polygon;
  for (let i = 0; i < $polygon.length; ++i) {
    jd = vec3_dot(plane, $polygon[i]!) - plane.w;
    if (jd < -PLANE_EPSILON) {
      back = polygon;
    } else if (jd > PLANE_EPSILON) {
      front = polygon;
    }
    if (back && front) {
      // Split polygon by the plane
      const fpoints: Vec3[] = [];
      const bpoints: Vec3[] = [];
      let iv: Vec3In = $polygon.at(-1)!;
      let id: number = vec3_dot(iv, plane) - plane.w;
      for (const jv of $polygon) {
        jd = vec3_dot(jv, plane) - plane.w;
        if (id < PLANE_EPSILON) {
          bpoints.push(iv);
        }
        if (id > -PLANE_EPSILON) {
          fpoints.push(iv);
        }
        if ((id > PLANE_EPSILON && jd < -PLANE_EPSILON) || (id < -PLANE_EPSILON && jd > PLANE_EPSILON)) {
          id /= jd - id;
          iv = {
            x: iv.x + (iv.x - jv.x) * id,
            y: iv.y + (iv.y - jv.y) * id,
            z: iv.z + (iv.z - jv.z) * id,
          };
          fpoints.push(iv);
          bpoints.push(iv);
        }
        iv = jv;
        id = jd;
      }
      front = fpoints.length > 2 && {
        $polygon: polygon_color(fpoints, $polygon.$color, $polygon.$smooth),
        $flipped,
        $parent: polygon,
      };
      back = bpoints.length > 2 && {
        $polygon: polygon_color(bpoints, $polygon.$color, $polygon.$smooth),
        $flipped,
        $parent: polygon,
      };
      break;
    }
  }
  return { x: front, y: back };
};

const csg_tree_addPolygon = (
  node: CSGNode | 0 | undefined,
  polygon: CSGPolygon,
  plane: Plane = plane_fromPolygon(polygon.$polygon),
): CSGNode => {
  if (node) {
    const { x: front, y: back } = CSGPolygon_split(node, polygon);
    if (!front && !back) {
      node.$polygon.push(polygon); // Coplanar
    }
    if (front) {
      node.$front = csg_tree_addPolygon(node.$front, front, plane);
    }
    if (back) {
      node.$back = csg_tree_addPolygon(node.$back, back, plane);
    }
  } else {
    node = { x: plane.x, y: plane.y, z: plane.z, w: plane.w, $polygon: [polygon], $front: 0, $back: 0 };
  }
  return node;
};

const csg_tree_clipNode = (anode: CSGNode, bnode: CSGNode, polygonPlaneFlipped: -1 | 1): CSGPolygon[] => {
  const result: CSGPolygon[] = [];
  const recursion = (node: CSGNode, polygon: CSGPolygon) => {
    let { x: front, y: back } = CSGPolygon_split(node, polygon);
    if (!front && !back) {
      if (polygonPlaneFlipped * vec3_dot(node, bnode) > 0) {
        front = polygon; // Coplanar front
      } else {
        back = polygon; // Coplanar back
      }
    }
    if (front) {
      if (node.$front) {
        recursion(node.$front, front);
      } else {
        result.push(front);
      }
    }
    if (back && node.$back) {
      recursion(node.$back, back);
    }
  };

  for (const polygon of bnode.$polygon) {
    recursion(anode, polygon);
  }
  return result;
};

/** Loop through all nodes in a tree */
const csg_tree_each = (node: CSGNode | 0 | undefined, fn: (node: CSGNode) => void): unknown =>
  node && (fn(node), csg_tree_each(node.$front, fn), csg_tree_each(node.$back, fn));

/** Convert solid space to empty space and empty space to solid space. */
export const csg_tree_flip = <T extends CSGNode | 0 | undefined>(root: T): T => {
  csg_tree_each(root, (node) => {
    const back = node.$back;
    node.$back = node.$front;
    node.$front = back;
    node.x *= -1;
    node.y *= -1;
    node.z *= -1;
    node.w *= -1;
    for (const polygon of node.$polygon) {
      polygon.$flipped = !polygon.$flipped;
    }
  });
  return root;
};

/**
 * Extracts all the polygons from a BSP tree.
 * Some polygons will be merged, to reduce the number of triangles.
 */
export const csg_polygons = (tree: CSGNode): Polygon[] => {
  const allPolygons = new Map<CSGPolygon, 0 | boolean>();
  const byParent = new Map<CSGPolygon, CSGPolygon>();

  /** Adds a polygon, and replaces two splitted polygons that have the same parent with the parent */
  const add = (polygon: CSGPolygon): CSGPolygon => {
    if (polygon.$parent) {
      const found = byParent.get(polygon.$parent);
      if (found) {
        allPolygons.delete(found);
        polygon = add(polygon.$parent);
      } else {
        byParent.set(polygon.$parent, polygon);
      }
    }
    return polygon;
  };

  csg_tree_each(tree, (node) => {
    for (const polygon of node.$polygon) {
      allPolygons.set(add(polygon), polygon.$flipped);
    }
  });

  return Array.from(allPolygons, ([{ $polygon }, flipped]) => {
    const polygon = $polygon.map(({ x, y, z }) => ({ x, y, z }));
    return polygon_color(flipped ? polygon.reverse() : polygon, $polygon.$color, $polygon.$smooth);
  });
};

/**
 * If the given argument is a list of polygons, a new BSP tree built from the list of polygons is returned.
 * If the given argument is already a BSP tree, return it as is.
 * Note that array cannot be empty.
 */
export const csg_tree = (n: CSGInput): CSGNode =>
  (n as Polygon[]).length
    ? // Build a BSP tree from a list of polygons
      ((n as Polygon[]).reduce<CSGNode | 0>(
        (prev, $polygon) => csg_tree_addPolygon(prev, { $polygon, $flipped: 0, $parent: 0 }),
        0,
      ) as CSGNode)
    : // An object? We assume is a BSP tree.
      (n as CSGNode);

/**
 * Union a[0] = a[0] U a[1] U a[2] U ...
 */
export const csg_union = (...inputs: CSGInput[]): CSGNode =>
  inputs.reduce((a: CSGInput, b: CSGInput | undefined): CSGNode => {
    const polygonsToAdd: [Plane, CSGPolygon[]][] = [];
    a = csg_tree(a);
    if (b) {
      b = csg_tree(b);

      // clip to a, b
      csg_tree_each(a, (node) => (node.$polygon = csg_tree_clipNode(b as CSGNode, node, 1)));

      // get the list of polygons to be added from b clipped to a
      csg_tree_each(b, (node) => polygonsToAdd.push([node, csg_tree_clipNode(a as CSGNode, node, -1)]));

      // add the polygons to a
      for (const [plane, polygons] of polygonsToAdd) {
        for (const pp of polygons) {
          csg_tree_addPolygon(a, pp, plane);
        }
      }
    }
    return a;
  }) as CSGNode;

/**
 * Subtraction a = a - (b[0] U b[1] U ...)
 * Note that a will be modified if is a tree.
 */
export const csg_subtract = (a: CSGInput, ...b: CSGInput[]): CSGNode =>
  csg_tree_flip(csg_union(csg_tree_flip(csg_tree(a)), ...b));

/**
 * Subtraction a - (b[0] U b[1] U ...)
 * Note that a will be modified if is a tree.
 */
export const csg_polygons_subtract = (a: CSGInput, ...b: CSGInput[]) =>
  csg_polygons(csg_tree_flip(csg_union(csg_tree_flip(csg_tree(a)), ...b)));

/**
 * Note that first tree will be modified if is a tree.
 */
export const csg_polygons_union = (...input: CSGInput[]) => csg_polygons(csg_union(...input));
