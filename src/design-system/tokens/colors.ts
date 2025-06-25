
// Design System Color Tokens - Transaction Calculator
// Copy this to new projects and import from your design system

export const colorPalette = {
  primary: {
    500: '#0C0F24', // Brand's dominant color, used for key CTAs, active states, links
    400: '#3D3F50', // Used for primary CTA items, lighter on hover
    300: '#858791', // Used for disabled CTAs, backgrounds for cards
    200: '#CECFD3', // Use for card backgrounds, input borders, subtle separators
    100: '#E7E7E9'  // Lightest primary background, page backgrounds, disabled backgrounds
  },
  secondary: {
    500: '#1B489B', // Main text, links, secondary actions
    400: '#496DAF', // Headlines, body text, hover state for primary CTAs
    300: '#93A3CB', // For headlines, body text, background tints
    200: '#D4DAEA', // Light neutral for panels, backgrounds, border
    100: '#E9ECF4'  // Lightest neutral, used for backgrounds and surfaces
  },
  status: {
    success: '#1E774A',      // Success states, banners, icons
    successLight: '#CCF2DB', // Light success backgrounds
    warning: '#895D0B',      // Warning/error states, tags, icons
    warningLight: '#FFE1A4'  // Light background for warnings
  },
  base: {
    white: '#FFFFFF',   // White background, cards, surfaces
    black: '#303030',   // Black or dark text/essential elements for contrast
    disabled: '#858791' // For disabled text, icons, controls
  },
  gradient: {
    from: '#3D3F50', // 15% opacity
    to: '#858791'    // 100% opacity - Used for selection menus and subtle backgrounds
  }
} as const;

// Color role mappings for easy reference
export const colorRoles = {
  // Main CTA/Brand
  mainCTA: colorPalette.primary[500],
  ctaHover: colorPalette.primary[400],
  disabled: colorPalette.primary[300],
  subtleBackground: colorPalette.primary[200],
  pageBackground: colorPalette.primary[100],
  
  // Text/Links/Headlines
  primaryText: colorPalette.secondary[500],
  textHighlight: colorPalette.secondary[400],
  accentText: colorPalette.secondary[300],
  lightBackground: colorPalette.secondary[200],
  lightestBackground: colorPalette.secondary[100],
  
  // Status
  success: colorPalette.status.success,
  successBackground: colorPalette.status.successLight,
  warning: colorPalette.status.warning,
  warningBackground: colorPalette.status.warningLight,
  
  // Base
  surface: colorPalette.base.white,
  essentialText: colorPalette.base.black,
  disabledText: colorPalette.base.disabled
} as const;

// CSS Custom Properties for easy theming
export const cssVariables = `
:root {
  --primary-500: #0C0F24;
  --primary-400: #3D3F50;
  --primary-300: #858791;
  --primary-200: #CECFD3;
  --primary-100: #E7E7E9;
  
  --secondary-500: #1B489B;
  --secondary-400: #496DAF;
  --secondary-300: #93A3CB;
  --secondary-200: #D4DAEA;
  --secondary-100: #E9ECF4;
  
  --success: #1E774A;
  --success-light: #CCF2DB;
  --warning: #895D0B;
  --warning-light: #FFE1A4;
  
  --base-white: #FFFFFF;
  --base-black: #303030;
  --disabled: #858791;
  
  --gradient-from: #3D3F50;
  --gradient-to: #858791;
}
`;
