import { integers_map } from "../math/math";
import { identity } from "../math/matrix";
import { vec3_polygonNormal, type Vec3 } from "../math/vectors";
import { vertex_clone, vertex_flipped, vertex_lerp, type Material, type Vertex } from "./vertex";

export interface Polygon {
  /** Polygon material */
  $color: Material;

  /** Polygon points */
  $points: Vertex[];
}

export const polygon_transform = ({ $color, $points }: Polygon, m: DOMMatrix): Polygon => ({
  $color,
  $points: $points.map(({ x, y, z, $nx, $ny, $nz }: Vertex): Vertex => {
    ({ x, y, z } = m.transformPoint({ x, y, z }));
    ({ x: $nx, y: $ny, z: $nz } = m.transformPoint({ x: $nx, y: $ny, z: $nz, w: 0 }));
    return { x, y, z, $nx, $ny, $nz };
  }),
});

export const polygon_clone = ({ $color, $points }: Polygon, flipped?: boolean | 1 | 0): Polygon => ({
  $color,
  $points: flipped ? $points.map(vertex_flipped).reverse() : $points.map(vertex_clone),
});

/**
 * Creates a polygon from a list of point.
 * The normal will be automatically calculated from the first 3 points.
 * Remember that you can define only convex and planar polygons - concave polygons are NOT supported.
 * To create a concave solid or holes, look at the csg.ts module
 */
export const polygon_fromPoints = (material: Material, points: Vec3[]): Polygon => {
  const { x: $nx, y: $ny, z: $nz } = vec3_polygonNormal(points as [Vec3, Vec3, Vec3]);
  return {
    $color: material,
    $points: points.map(({ x, y, z }: Vec3): Vertex => ({ x, y, z, $nx, $ny, $nz })),
  };
};

/**
 * Creates a regular polygon
 * The polygon will face up (normal 0, -1, 0).
 */
export const polygon_regular = ($color: Material, segments: number, arc = (Math.PI / segments) * 2): Polygon =>
  polygon_fromPoints(
    $color,
    integers_map(segments, (i) => ({
      x: Math.cos(arc * i),
      y: 0,
      z: Math.sin(arc * i),
    })),
  );

export const polygon_quad = (material: Material, y: number = 0): Polygon =>
  polygon_fromPoints(material, [
    { x: -1, y, z: -1 },
    { x: 1, y, z: -1 },
    { x: 1, y, z: 1 },
    { x: -1, y, z: 1 },
  ]);

/**
 * Connects a top and a bottom polygon with side polygons.
 * Top and bottom polygons must have the same length.
 * Top polygon is supposed to be flipped.
 */
export const polygon_sides = ($color: Material, { $points: btm }: Polygon, { $points: top }: Polygon): Polygon[] =>
  btm.map((btmi, i, { length }) =>
    polygon_fromPoints($color, [
      btmi,
      top[length - i - 1]!,
      top[length - ((i + 1) % length) - 1]!,
      btm[(i + 1) % length]!,
    ]),
  );

/**
 * Returns a new solid with all materials changed.
 * Warning: this function does not clone the polygons points.
 */
export const solid_material = (solid: Polygon[], $color: Material): Polygon[] =>
  solid.map((polygon: Polygon): Polygon => ({ ...polygon, $color }));

/**
 * Smooths the normals of a list of quads
 * @param sides The side polygons returned by polygon_sides
 * @returns
 */
export const solid_smoothSidesQuads = (sides: Polygon[]): Polygon[] => {
  const len = sides.length;
  let a = sides[len - 2]!.$points;
  let b = sides[len - 1]!.$points;
  return sides.map(({ $points: c, $color }) => {
    const result = {
      $color,
      $points: [
        vertex_lerp(b[0]!, a[3]!, 0, 0.5),
        vertex_lerp(b[1]!, a[2]!, 0, 0.5),
        vertex_lerp(b[2]!, c[1]!, 0, 0.5),
        vertex_lerp(b[3]!, c[0]!, 0, 0.5),
      ],
    };
    a = b;
    b = c;
    return result;
  });
};

/**
 * Extrudes a polygon into a solid.
 * To remove bottom and top polygons, use solid_extrude(...).slice(2).
 * The solid will be centered at 0 vertically and its height will be 2 (from -1 to 1)
 */
export const solid_extrude = (
  $color: Material,
  bottom: Polygon,
  top: Polygon = polygon_clone(bottom, 1),
): Polygon[] => {
  bottom = polygon_transform(bottom, identity.translate(0, -1));
  top = polygon_transform(top, identity.translate(0, 1));
  const sides = polygon_sides($color, bottom, top);
  return [bottom, top, ...sides];
};

export const solid_box = ($color: Material) => solid_extrude($color, polygon_quad($color));

export const solid_regular = ($color: Material, sides: number) => solid_extrude($color, polygon_regular($color, sides));

/** Simplest composition of polygon functions. */
export const solid_cylinder = ($color: Material, segments: number, smoothed?: boolean | 0 | 1): Polygon[] => {
  const solid = solid_extrude($color, polygon_regular($color, segments));
  return smoothed ? [solid[0]!, solid[1]!, ...solid_smoothSidesQuads(solid.slice(2))] : solid;
};

export const solid_transform = (solid: Polygon[], m: DOMMatrix) =>
  solid.map((polygon) => polygon_transform(polygon, m));
