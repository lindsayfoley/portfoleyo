export const colourTheme = {
  default: "default",
  highlight: "highlight",
  muted: "muted",
} as const;

export type Theme = (typeof colourTheme)[keyof typeof colourTheme];
