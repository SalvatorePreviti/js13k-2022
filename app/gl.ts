export const gl: WebGL2RenderingContext = hC.getContext("webgl2", { powerPreference: "high-performance" })!;

export const cgl: WebGL2RenderingContext = hD.getContext("webgl2", {
  powerPreference: "high-performance",
  preserveDrawingBuffer: true,
  desynchronized: true,
  antialias: false,
})!;

for (const s in cgl) {
  [gl, cgl].map(
    (xgl) =>
      ((xgl as any)[s[0] + [...s].reduce((p, c, i) => (p * i + c.charCodeAt(0)) % 434, 0).toString(36)] = (xgl as any)[
        s
      ]),
  );
}
