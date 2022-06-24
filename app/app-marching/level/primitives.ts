import { clamp } from "../../math/math";
import type { Vec2, Vec3In } from "../../math/vectors";

// 32 maps unit = 1 meter

export const ONE_METER_IN_MAP_UNIT = 32;

export const MAX_MAP_SIZE_IN_METERS = 1024;

export const PRIMITIVE_SPHERE = 0;

export const PRIMITIVE_HEX_PRISM = 1;

export const PRIMITIVE_CYLINDER = 2;

export const PRIMITIVE_BOX = 3;

export const PRIMITIVE_FRAME = 4;

export interface Primitive {
  type: number;
  center: Vec3;
  size: Vec3;
  rot: Vec2;
  color: Vec3;
}

/*
1: type, centerx, centery, centerz
2: sizex, sizey, sizez, rotx
3: roty, colorx, colory, colorz
*/

export class PrimitiveWriter {
  public primitivesCount: number = 0;
  public values: number[] = [];

  public writeFloat(value: number) {
    this.values.push(value);
  }

  public writeVec3Pos(value: Vec3In) {
    this.writeFloat(value.x);
    this.writeFloat(value.y);
    this.writeFloat(value.z);
  }

  public writeColor(r: number, g: number, b: number) {
    this.writeFloat(clamp(r));
    this.writeFloat(clamp(g));
    this.writeFloat(clamp(b));
  }

  public writePrimitive(primitive: Primitive) {
    this.writeFloat(0);
    this.writeVec3Pos(primitive.center);
    this.writeVec3Pos(primitive.size);
    this.writeFloat(primitive.rot.x);
    this.writeFloat(primitive.rot.y);
    this.writeColor(primitive.color.x, primitive.color.y, primitive.color.z);
    return this.primitivesCount++;
  }
}

export const primitiveWriter = new PrimitiveWriter();

const sphereSize = 0.01;

for (let i = 0; i < 10000; ++i) {
  primitiveWriter.writePrimitive({
    type: PRIMITIVE_SPHERE,
    rot: { x: 1, y: 1 },
    center: { x: (i % 40) / 50 - 0.4, y: i / 200 - 0.3, z: 0 },
    size: { x: sphereSize, y: sphereSize, z: sphereSize + Math.random() / 20 },
    color: { x: 1, y: 1, z: 1 },
  });
}

console.log(primitiveWriter.values);

console.log(primitiveWriter.primitivesCount + " primitives " + primitiveWriter.values.length + " numbers");

/* export class PrimitiveWriter {
  public index: number = 0;

  public writeByte(value: number) {
    index += 1;
  }

  public writeFloat(value: number) {
    index += 4;
  }

  public writeVec2(value: Vec2In) {
    this.writeFloat(value.x);
    this.writeFloat(value.y);
  }

  public writeVec3(value: Vec3In) {
    this.writeFloat(value.x);
    this.writeFloat(value.y);
    this.writeFloat(value.z);
  }

  public writePrimitive(primitive: Primitive) {
    const result = this.index;

    this.writeByte(primitive.type);
    this.writeVec3(primitive.center);
    this.writeVec3(primitive.size);
    this.writeVec3(primitive.color);
    this.writeVec3(primitive.rot);

    return result;
  }
}

export function primitive_write(out: number[], position: number, primitive: Primitive): number {
  switch (primitive.type) {
    case PRIMITIVE_SPHERE:
  }
}
*/
