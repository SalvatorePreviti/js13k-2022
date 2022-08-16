import { plane_fromPolygon, type Vec3In, type Plane, vec3_dot } from "../math/vectors";
import { polygon_color, type Polygon } from "./geometry";

export const PLANE_EPSILON = 0.00008;

export interface CSGPolygon {
  $polygon: Polygon;

  $flipped: boolean;

  /**
   * When a polygon is splitted, this will contain the polygon from which this polygon was splitted.
   * This is then used by csg_polygons to merge back splitted polygons if they are both present,
   * to reduce the number of vertices and triangles.
   */
  $parent: CSGPolygon | 0;
}

export interface CSGNode extends Plane {
  /** Coplanar polygons */
  $polygons: CSGPolygon[];
  /** Front child */
  $front: CSGNode | 0;
  /** Back child */
  $back: CSGNode | 0;
}

export type CSGInput = CSGNode | readonly Polygon[];

interface SplitPolygonResult {
  $front: CSGPolygon | undefined | false;
  $back: CSGPolygon | undefined | false;
}

const CSGPolygon_splitSpanning = /* @__PURE__ */ (plane: Plane, polygon: CSGPolygon): SplitPolygonResult => {
  const fpoints: Vec3In[] = [];
  const bpoints: Vec3In[] = [];
  const points = polygon.$polygon;
  let jd: number;
  let iv: Vec3In = points.at(-1)!;
  let id: number = vec3_dot(plane, iv) - plane.w;
  for (const jv of points) {
    jd = vec3_dot(plane, jv) - plane.w;
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
  return {
    $front: fpoints.length > 2 && {
      $polygon: polygon_color(fpoints, points.$color, points.$smooth),
      $flipped: polygon.$flipped,
      $parent: polygon,
    },
    $back: bpoints.length > 2 && {
      $polygon: polygon_color(bpoints, points.$color, points.$smooth),
      $flipped: polygon.$flipped,
      $parent: polygon,
    },
  };
};

const CSGPolygon_split = /* @__PURE__ */ (plane: Plane, polygon: CSGPolygon): SplitPolygonResult => {
  const { $polygon } = polygon;
  let $front: CSGPolygon | undefined;
  let $back: CSGPolygon | undefined;
  let d: number;
  for (let i = 0; i < $polygon.length; ++i) {
    d = vec3_dot(plane, $polygon[i]!) - plane.w;
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

const csg_tree_addPolygon = /* @__PURE__ */ (
  node: CSGNode | 0 | undefined,
  polygon: CSGPolygon,
  plane: Plane,
): CSGNode => {
  if (!node) {
    return {
      x: plane.x,
      y: plane.y,
      z: plane.z,
      w: plane.w,
      $polygons: [polygon],
      $front: 0,
      $back: 0,
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

const csg_tree_clipPolygon = /* @__PURE__ */ (
  node: CSGNode,
  polygon: CSGPolygon,
  polygonPlane: Plane,
  polygonPlaneFlipped: -1 | 1,
  result: CSGPolygon[],
): void => {
  let { $front, $back } = CSGPolygon_split(node, polygon);
  if (!$front && !$back) {
    if (vec3_dot(node, polygonPlane) * polygonPlaneFlipped > 0) {
      $front = polygon; // Coplanar front
    } else {
      $back = polygon; // Coplanar back
    }
  }
  if ($front) {
    if (node.$front) {
      csg_tree_clipPolygon(node.$front, $front, polygonPlane, polygonPlaneFlipped, result);
    } else {
      result.push($front);
    }
  }
  if ($back && node.$back) {
    csg_tree_clipPolygon(node.$back, $back, polygonPlane, polygonPlaneFlipped, result);
  }
};

/** Loop through all nodes in a tree */
const csg_tree_each = /* @__PURE__ */ (node: CSGNode | 0 | undefined, fn: (node: CSGNode) => void): unknown =>
  node && (fn(node), csg_tree_each(node.$front, fn), csg_tree_each(node.$back, fn));

/**
 * If the given argument is a list of polygons, a new BSP tree built from the list of polygons is returned.
 * If the given argument is already a BSP tree, return it as is.
 * Note that array cannot be empty.
 */
export const csg_tree = /* @__PURE__ */ (n: CSGInput): CSGNode =>
  (n as Polygon[]).length
    ? // Build a BSP tree from a list of polygons
      ((n as Polygon[]).reduce<CSGNode | 0>(
        (prev, $polygon) =>
          csg_tree_addPolygon(prev, { $polygon, $flipped: false, $parent: 0 }, plane_fromPolygon($polygon)),
        0,
      ) as CSGNode)
    : // An object? We assume is a BSP tree.
      (n as CSGNode);

/**
 * Union a = a U b
 * @param a First geometry and target of the union
 * @param b Source second geometry to add
 * @returns
 */
export const csg_union_op = /* @__PURE__ */ (a: CSGInput, b: CSGInput | undefined): CSGNode => {
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

    // add the polygons to a
    for (const [plane, polygons] of polygonsToAdd) {
      for (const pp of polygons) {
        csg_tree_addPolygon(a, pp, plane);
      }
    }
  }
  return a;
};

/**
 * Union a[0] = a[0] U a[1] U a[2] U ...
 */
export const csg_union = /* @__PURE__ */ (inputs: CSGInput[]): CSGNode => inputs.reduce(csg_union_op) as CSGNode;

/** Convert solid space to empty space and empty space to solid space. */
export const csg_tree_flip = /* @__PURE__ */ (root: CSGNode | 0 | undefined): unknown =>
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

/**
 * Subtraction a = a - b
 */
export const csg_subtract = /* @__PURE__ */ (a: CSGInput, b: CSGInput): CSGNode => {
  a = csg_tree(a);
  csg_tree_flip(a);
  csg_union_op(a, b);
  csg_tree_flip(a);
  return a;
};

/**
 * Extracts all the polygons from a BSP tree.
 * Some polygons will be merged, to reduce the number of triangles.
 */
export const csg_polygons = /* @__PURE__ */ (tree: CSGNode): Polygon[] => {
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

  for (let [
    {
      $polygon,
      $polygon: { $color, $smooth },
    },
    flipped,
  ] of allPolygons) {
    $polygon = $polygon.map(({ x, y, z }) => ({ x, y, z }));
    if (flipped) {
      $polygon.reverse();
    }
    result.push(polygon_color($polygon, $color, $smooth));
  }
  return result;
};
