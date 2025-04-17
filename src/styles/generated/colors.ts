// src/styles/generated/colors.ts
// Auto-generated file - do not edit manually

import { colorTokens, ThemeMode, ColorTokens } from '../tokens/colors';

export type { ThemeMode, ColorTokens };
export { colorTokens };

// Re-export the color tokens for easy access
export const colors = colorTokens;

// Helper function to get a color value from the current theme
export const getColor = (
  theme: ThemeMode,
  category: keyof ColorTokens,
  variant: string
): string => {
  return colorTokens[theme][category][variant] || '';
};

// Helper function to get a color value with fallback
export const getColorWithFallback = (
  theme: ThemeMode,
  category: keyof ColorTokens,
  variant: string,
  fallback: string
): string => {
  return colorTokens[theme][category][variant] || fallback;
};
