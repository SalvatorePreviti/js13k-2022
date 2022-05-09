import type { OptionsOutput as CleanCssOptions } from "clean-css";

export { CleanCssOptions };

export const cleanCssOptions: CleanCssOptions = {
  compatibility: "*",
  inline: ["all"],
  level: 2,
  rebase: false,
  sourceMap: false,
};
