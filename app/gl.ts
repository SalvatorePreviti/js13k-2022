export const gl: WebGL2RenderingContext = hC.getContext("webgl2", { powerPreference: "high-performance" })!;

for (const s in gl) {
  (gl as any)[s[0] + [...s].reduce((p, c, i) => (p * i + c.charCodeAt(0)) % 434, 0).toString(36)] = (gl as any)[s];
}
