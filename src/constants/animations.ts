export const animations = {
  // durations in milliseconds
  fast: 150,
  normal: 300,
  slow: 500,

  // utility classes (compose with Tailwind transitions in components)
  hoverScaleClass: "hover:scale-105",
  pageTransitionClass: "transition-opacity duration-300",
} as const;
