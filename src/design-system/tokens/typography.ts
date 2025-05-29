
// Design System Typography Tokens

export const typography = {
  fontFamily: {
    sans: ['Roboto', 'ui-sans-serif', 'system-ui', 'sans-serif'],
  },
  fontSize: {
    xs: '12px',
    sm: '14px',
    base: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '30px',
    '4xl': '36px',
  },
  fontWeight: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
  lineHeight: {
    tight: '1.25',
    normal: '1.5',
    relaxed: '1.75',
  },
  letterSpacing: {
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
  }
} as const;
