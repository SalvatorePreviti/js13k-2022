export function stripHtmlEndTags(html: string) {
  return html.replace(/(\s*<\s*\/\s*(html|body)\s*>\s*)*$/i, "");
}
