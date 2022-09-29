import { identity } from "./matrix";

export const translation = NO_INLINE((x: number, y?: number, z?: number) => identity.translate(x, y, z));

export const rotation = NO_INLINE((x: number, y?: number, z?: number) => identity.rotate(x, y, z));

export const scaling = NO_INLINE((x: number, y?: number, z?: number) => identity.scale(x, y, z));
