import { identity } from "./matrix";

export const translation = NO_INLINE((x: number, y?: number, z?: number) => identity.translate(x, y, z));
