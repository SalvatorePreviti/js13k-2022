const OCTREE_DEPTH = 16;

class Octree {
  public octree: number[] = [];

  public insert(x: number, y: number, z: number) {}

  public getOrCreateNode() {}
}

/* export class OctreeNodeBounds {
  public x: number = 0;
  public y: number = 0;
  public z: number = 0;
  public h: number = 0;
}

export class OctreeNode {
  public x: number;
  public y: number;
  public z: number;
  public w: number;
  public octants: OctreeNode[] | null = null;

  public constructor(x: number, y: number, z: number, w: number) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
  }

  public contains(x: number, y: number, z: number) {
    const h = this.h;
    return this.x - h <= x && x < this.x + h && this.y - h <= y && y < this.y + h && this.z - h <= z && z < this.z + h;
  }

  public subdivide() {
    const { x, y, z, w } = this;
    const quarter = w / 2;
    this.octants = [
      new OctreeNode(x - quarter, y - quarter, z - quarter, quarter),
      new OctreeNode(x + quarter, y - quarter, z - quarter, quarter),
      new OctreeNode(x - quarter, y + quarter, z - quarter, quarter),
      new OctreeNode(x + quarter, y + quarter, z - quarter, quarter),
      new OctreeNode(x - quarter, y - quarter, z + quarter, quarter),
      new OctreeNode(x + quarter, y - quarter, z + quarter, quarter),
      new OctreeNode(x - quarter, y + quarter, z + quarter, quarter),
      new OctreeNode(x + quarter, y + quarter, z + quarter, quarter),
    ];
  }

  public getOrCreateChild(index: number) {
    if (this.octants === null) {
      this.octants = [];
    }
    this.octants[index]
  }

  public insert(idx, array, depth) {
    const isLeaf = this.octants === null;
    if (isLeaf) {
      if (this.items.length >= MAX_ITEMS && depth < 16) {
        this.subdivide();
        for (let i = 0; i < this.items.length; ++i) {
          this.insert(this.items[i], array, depth + 1);
        }
        this.items = null;
      }
    } else {
      const x = array[idx];
      const y = array[idx + 1];
      const z = array[idx + 2];
      const bounds = this.bounds;
      let quadIdx = 0; // assume NW
      if (x > bounds.x) {
        quadIdx += 1; // nope, we are in E part
      }
      if (y > bounds.y) {
        quadIdx += 2; // Somewhere south.
      }
      if (z > bounds.z) {
        quadIdx += 4; // Somewhere far
      }

      const child = getChild(this, quadIdx);
      child.insert(idx, array, depth + 1);
    }
  }
}
*/
