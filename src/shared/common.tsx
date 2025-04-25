export const colourTheme = {
  default: "default",
  highlight: "highlight",
  muted: "muted",
} as const;

export type Theme = (typeof colourTheme)[keyof typeof colourTheme];

export const getIconFillValueFromTheme = (theme: Theme) => {
  if (theme === colourTheme.muted) {
    return "#ffffff";
  }

  if (theme === colourTheme.highlight) {
    return "#faf1ec";
  }

  return "#f8f7f3";
};
