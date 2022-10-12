const integers_map = <T>(n: number, fn: (i: number) => T) => Array.from(Array(n), (_, i) => fn(i));

export let t = 0;

integers_map(6, (z) =>
  integers_map(6, (x) => {
    // console.log(z & 1, +(t % 12 > 5));
    console.log(-12 + 2 * (z & 1), t % 12 > 5 ? -10 : -12);
    // console.log(z, (t / 6) | 0);
    // console.log(x, 4.6 * (t % 6));
    ++t;
  }),
);

console.log();

// integers_map(36, (t) => {
//   console.log(t & 1);
// });
