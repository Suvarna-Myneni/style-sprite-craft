
// Design System Typography Tokens - Transaction Calculator

export const typography = {
  fontFamily: {
    sans: ['Roboto', 'ui-sans-serif', 'system-ui', 'sans-serif'],
  },
  
  // Web Typography
  web: {
    heading01: {
      fontSize: '32px',
      fontSizeRem: '2rem',
      fontWeight: { regular: '400', semiBold: '600' },
      lineHeight: '38px',
      lineHeightRatio: '1.188',
      letterSpacing: '0'
    },
    heading02: {
      fontSize: '28px',
      fontSizeRem: '1.75rem',
      fontWeight: { regular: '400', semiBold: '600' },
      lineHeight: '34px',
      lineHeightRatio: '1.750',
      letterSpacing: '0'
    },
    heading03: {
      fontSize: '24px',
      fontSizeRem: '1.5rem',
      fontWeight: { regular: '400', semiBold: '600' },
      lineHeight: '30px',
      lineHeightRatio: '1.25',
      letterSpacing: '0'
    },
    heading04: {
      fontSize: '20px',
      fontSizeRem: '1.25rem',
      fontWeight: { regular: '400', semiBold: '600' },
      lineHeight: '24px',
      lineHeightRatio: '1.2',
      letterSpacing: '0'
    },
    body: {
      fontSize: '16px',
      fontSizeRem: '1rem',
      fontWeight: { regular: '400', semiBold: '600' },
      lineHeight: '24px',
      lineHeightRatio: '1.5',
      letterSpacing: '0'
    },
    caption: {
      fontSize: '14px',
      fontSizeRem: '0.875rem',
      fontWeight: { regular: '400', semiBold: '600' },
      lineHeight: '20px',
      lineHeightRatio: '1.43',
      letterSpacing: '0'
    },
    label: {
      fontSize: '12px',
      fontSizeRem: '0.75rem',
      fontWeight: { regular: '400', semiBold: '600' },
      lineHeight: '16px',
      lineHeightRatio: '1.33',
      letterSpacing: '0'
    }
  },
  
  // Mobile Typography
  mobile: {
    heading01: {
      fontSize: '28px',
      fontSizeRem: '1.75rem',
      fontWeight: { regular: '400', semiBold: '600' },
      lineHeight: '34px',
      lineHeightRatio: '1.750',
      letterSpacing: '0'
    },
    heading02: {
      fontSize: '24px',
      fontSizeRem: '1.5rem',
      fontWeight: { regular: '400', semiBold: '600' },
      lineHeight: '30px',
      lineHeightRatio: '1.25',
      letterSpacing: '0'
    },
    heading03: {
      fontSize: '20px',
      fontSizeRem: '1.25rem',
      fontWeight: { regular: '400', semiBold: '600' },
      lineHeight: '24px',
      lineHeightRatio: '1.2',
      letterSpacing: '0'
    },
    heading04: {
      fontSize: '18px',
      fontSizeRem: '1.125rem',
      fontWeight: { regular: '400', semiBold: '600' },
      lineHeight: '24px',
      lineHeightRatio: '1.33',
      letterSpacing: '0'
    },
    body: {
      fontSize: '16px',
      fontSizeRem: '1rem',
      fontWeight: { regular: '400', semiBold: '600' },
      lineHeight: '24px',
      lineHeightRatio: '1.5',
      letterSpacing: '0'
    },
    body02: {
      fontSize: '14px',
      fontSizeRem: '0.875rem',
      fontWeight: { regular: '400', semiBold: '600' },
      lineHeight: '20px',
      lineHeightRatio: '1.43',
      letterSpacing: '0'
    },
    caption: {
      fontSize: '12px',
      fontSizeRem: '0.75rem',
      fontWeight: { regular: '400', semiBold: '600' },
      lineHeight: '16px',
      lineHeightRatio: '1.33',
      letterSpacing: '0'
    },
    label: {
      fontSize: '10px',
      fontSizeRem: '0.625rem',
      fontWeight: { regular: '400', semiBold: '600' },
      lineHeight: '14px',
      lineHeightRatio: '1.4',
      letterSpacing: '0'
    }
  },
  
  // Legacy format for backwards compatibility
  fontSize: {
    xs: '12px',
    sm: '14px',
    base: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '28px',
    '4xl': '32px',
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
