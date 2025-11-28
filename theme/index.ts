const palette = {
  primary: "#afc1d0",
  primaryDark: "#7c91a6",
  accent: "#ffbd59",
  accentDark: "#e0a148",
  background: "#f3f6fa",
  surface: "#ffffff",
  muted: "#6b7280",
  text: "#1f2a37",
  border: "#e5e7eb",
  danger: "#ef4444",
  success: "#10b981",
};

export const theme = {
  colors: {
    primary: palette.primary,
    primaryDark: palette.primaryDark,
    accent: palette.accent,
    accentDark: palette.accentDark,
    background: palette.background,
    surface: palette.surface,
    muted: palette.muted,
    text: palette.text,
    border: palette.border,
    danger: palette.danger,
    success: palette.success,
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  radii: {
    sm: 6,
    md: 12,
    lg: 20,
  },
  typography: {
    headings: {
      h1: 28,
      h2: 22,
      h3: 18,
    },
    body: 16,
    caption: 14,
    small: 12,
  },
  shadow: {
    card: {
      shadowColor: "#0f172a",
      shadowOffset: { width: 0, height: 10 },
      shadowOpacity: 0.05,
      shadowRadius: 12,
      elevation: 4,
    },
  },
};

export type Theme = typeof theme;

