let s = "";
for (let i = 0; i < 4 - 1; i++) {
  const j = i + 1;
  s += `if (zDepthValue < cascadedSplits[${j}]) {\n`;
  s += `  return cascadedSplits[${j}];\n`;
  s += "}\n";
  s += `return cascadedSplits[${0}];\n`;
}

console.log(s);

/* sampler2DShadow findCascadeText(float zDepthValue) {
  for (uint i = 0u; i < 4u - 1u; ++i) {
    if (zDepthValue < cascadedSplits[i]) {
      cascadeIdx = i + 1u;

      if (i == 0u)
        CascadeIndicator = vec4(0.1, 0.0, 0.0, 0.0);
      else if (i == 1u)
        CascadeIndicator = vec4(0.0, 0.1, 0.0, 0.0);
      else if (i == 2u)
        CascadeIndicator = vec4(0.0, 0.0, 0.1, 0.0);
    }
  }
  return cascadeIdx;
} */
