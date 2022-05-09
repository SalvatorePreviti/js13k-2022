export type ZipCompressionImplementation = "zlib" | "zopfli";

export const zipBundleOptions = {
  /** Choose your fighter - old school 'zlib' or the insane 'zopfli'? */
  implementation: "zopfli" as ZipCompressionImplementation,

  /** If you chose zopfli (you should), here you can pass some options. */
  zopfli: {
    /** Maximum amount of times to rerun forward and backward pass to optimize LZ77 compression cost. The more, the slower. */
    numiterations: 170,

    /** Maximum amount of blocks to split into (0 for unlimited, but this can give extreme results that hurt compression on some files). */
    blocksplittingmax: 30,

    /** If true, splits the data in multiple deflate blocks with optimal choice for the block boundaries. Block splitting gives better compression. */
    blocksplitting: true,

    /** If true, chooses the optimal block split points only after doing the iterative LZ77 compression.
     * If false, chooses the block split points first, then does iterative LZ77 on each individual block.
     * Depending on the file, either first or last gives the best compression. */
    blocksplittinglast: false,

    /** When enabled, logs some debug info */
    verbose: false,

    /** When enabled, logs too much debug info */
    verbose_more: false,
  },

  /** If you chose zlib (you should not), here you can pass some options. */
  zlib: {
    /** Compression level, from 1 to 9 */
    level: 9,

    /** Memory that can be used, from 1 to 9 */
    memLevel: 9,

    /** Default is 15 */
    windowBits: 15,
  },
};
