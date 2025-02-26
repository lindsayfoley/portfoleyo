export const theme = {
  default: "default",
  highlight: "highlight",
  muted: "muted",
} as const;

export type Theme = (typeof theme)[keyof typeof theme];
