export const integers_map = <T>(n: number, fn: (i: number) => T) => Array.from(Array(n), (_, i) => fn(i));
