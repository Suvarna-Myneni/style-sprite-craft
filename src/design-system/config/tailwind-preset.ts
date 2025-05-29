
// Tailwind CSS Preset for Design System
// Copy this configuration to new projects

import { colorPalette } from '../tokens/colors';
import { typography } from '../tokens/typography';
import { spacing, borderRadius } from '../tokens/spacing';

export const designSystemConfig = {
  theme: {
    extend: {
      fontFamily: typography.fontFamily,
      fontSize: typography.fontSize,
      fontWeight: typography.fontWeight,
      lineHeight: typography.lineHeight,
      letterSpacing: typography.letterSpacing,
      spacing: spacing,
      borderRadius: borderRadius,
      colors: {
        'ds-primary': colorPalette.primary,
        'ds-secondary': colorPalette.secondary,
        'ds-status': colorPalette.status,
        'ds-base': colorPalette.base,
      },
    },
  },
};
